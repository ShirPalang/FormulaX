import { createBrowserRouter } from "react-router";

import { RootLayout } from "../components/layout/RootLayout";
import { Home } from "../pages/Home";

const router = createBrowserRouter([
  {
    path: '/', element: <RootLayout />, children: [
      { index: true, element: <Home/> },
      { path: 'feed', element: <h1>feed</h1> },
      { path: 'calcflow', element: <h1>reels</h1> },
      { path: 'stories', element: <h1>stories</h1> },
      { path: 'profile', element: <h1>profile</h1> },
      { path: 'user', element: <h1>user</h1> },
      { path: 'hashtag', element: <h1>hashtag</h1> },
    ]
  },
])

export default router