import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {path: '/' , element: <h1>calculator</h1>},
  {path: '/feed' , element: <h1>feed</h1>},
  {path: '/calcflow' , element: <h1>reels</h1>},
  {path: '/stories' , element: <h1>stories</h1>},
  {path: '/profile' , element: <h1>profile</h1>},
  {path: '/user' , element: <h1>user</h1>},
  {path: '/hashtag' , element: <h1>hashtag</h1>},
])

export default router