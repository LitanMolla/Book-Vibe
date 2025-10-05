import { createBrowserRouter } from "react-router";
import Root from "../../layout/Root/Root";
import Home from "../../pages/Home/Home";
import ListedBooks from "../../pages/ListedBooks/ListedBooks";
import PagestoRead from "../../pages/PagestoRead/PagestoRead";
import BookDetails from "../../pages/BookDetails/BookDetails";

const Router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                Component: Home,
                loader: async () => await fetch('/data.json')
            },
            {
                path: 'listed',
                Component: ListedBooks
            },
            {
                path: 'pages-read',
                Component: PagestoRead
            },
            {
                path: 'book-details/:id',
                Component: BookDetails,
                loader: async () => await fetch('/data.json')
            }
        ]
    }
]);

export default Router;