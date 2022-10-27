import axios from 'axios';

export async function RequesPictures(query, pages, controller) {
  try {
    const queryPictures = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${pages}&key=29826556-a4f91074fca654992db1f732d&image_type=photo&orientation=horizontal&per_page=12`,
      { signal: controller.signal }
    );
    return queryPictures;
  } catch (error) {
    alert('Упс,все упало. Спробуйте ще раз');
  }
}
