
export const useTitle = (title) => {
    let path = title.split("/")[1]
    document.title = `${title == "/" ? "Home" : path.slice(0, 1).toUpperCase() + path.slice(1)} | Plantnest`
    console.log(title)
}

export const Pagination = (arr, page, numberOfItemsPerPage) => {
    let pages = [];
    for (let i = 1; i <= Math.floor(arr.length / numberOfItemsPerPage); i++) {
        pages.push(i);
    }
    let start = !page ? 0 : (page - 1) * numberOfItemsPerPage;
    let end = start + numberOfItemsPerPage;
    let items = arr.slice(start, end);
    return { pages, items };
}