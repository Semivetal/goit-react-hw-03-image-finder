import React, { Component } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import Loader from "../../components/Loader/Loader";
import Button from "../Button/Button";
import picturesAPI from "../../services/picturesApi";
import "./ImageGallery.css";

class ImageGallery extends Component {
  static propTypes = {
    query: PropTypes.string,
    openModal: PropTypes.func,
  };

  state = {
    pictures: [],
    error: null,
    page: 1,
    status: "idle",
  };

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.query !== prevProps.query) {
      this.setState({ page: 1, pictures: [], status: "pending" });
      await this.getPicturesAfterNewSearch();
    }
    if (prevState.page !== this.state.page && this.state.page > 1) {
      this.setState({ status: "pending-ready" });
      await this.getPicturesFromNextPage();
    }
  }

  getPicturesAfterNewSearch = async () => {
    await picturesAPI(this.props.query)
      .then((pictures) => {
        this.setState({ pictures: pictures.hits, status: "resolved" });
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  getPicturesFromNextPage = async () => {
    await picturesAPI(this.props.query, this.state.page)
      .then((pictures) => {
        const picturesArray = pictures.hits;
        this.setState((prevState) => ({
          pictures: [...prevState.pictures, ...picturesArray],
          status: "resolved",
        }));
        this.autoScroll();
      })
      .catch((error) => this.setState({ error, status: "rejected" }));
  };

  autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  handleLoadMore = () => {
    this.setState((prevState) => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { status, pictures, error } = this.state;

    if (status === "idle") {
      return (
        <div className="Warning">
          Write down something to start searching for pictures
        </div>
      );
    }

    if (status === "pending") {
      return <Loader />;
    }

    if (status === "pending-ready") {
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem
              pictures={pictures}
              onClick={this.props.onClick}
            />
          </ul>
          <Loader />
        </>
      );
    }

    if (status === "rejected") {
      return toast.error(error.message);
    }

    if (status === "resolved") {
      return (
        <>
          <ul className="ImageGallery">
            <ImageGalleryItem
              pictures={pictures}
              onClick={this.props.onClick}
            />
          </ul>

          {pictures.length > 0 ? (
            <Button onClick={this.handleLoadMore} />
          ) : (
            <div className="Warning">
              You should write down correct word for search
            </div>
          )}
        </>
      );
    }
  }
}

export default ImageGallery;
