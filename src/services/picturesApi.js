function loadPicture(request, page) {
  return fetch(
    `https://pixabay.com/api/?q=${request}&page=${page}&key=23157065-e1d5c0e7ddd229ceec096f468&image_type=photo&orientation=horizontal&per_page=12`
  ).then((response) => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`There are no pictures with ${request}`));
  });
}

export default loadPicture;
