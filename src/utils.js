export const getImageUrl = (path) => {
    newUrl =  new URL (`assets/${path}`, import.meta.url).href;
    console.log(newUrl);
    return newUrl;
}