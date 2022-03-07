import React, { FC } from 'react'
import {
   BrowserRouter,
   Routes,
   Route,
   Link,
   Navigate,
   useSearchParams,
} from 'react-router-dom'

export const Navigation: FC = () => {
   const [searchParams] = useSearchParams()
   const level = searchParams.get('level') || ''
   const getLocationObjWithSearchParams = (
      pathname: string,
   ): Partial<Location> => ({
      pathname,
      search: `${
         level &&
         `?${new URLSearchParams({
            level,
         }).toString()}`
      }`,
   })

   return (
      <nav>
         <ul>
            <li>
               <Link to={getLocationObjWithSearchParams('/')}>Home</Link>
            </li>
            <li>Game With Hooks</li>
            <li>Game With useReducer</li>
            <li>Game With ReactRedux</li>
         </ul>
      </nav>
   )
}

export const Home: FC = () => <h2>Minesweeper game Forever!</h2>

export const Routing = () => (
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" />} />
   </Routes>
)

export const App: FC = () => (
   <BrowserRouter>
      <Navigation />
      <Routing />
   </BrowserRouter>
)
