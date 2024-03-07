import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Category, Details } from "@/pages"

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
      <Route path="/" element={<Home />} />
          <Route path=":category" element={<Category />} >
            <Route path=":details" element={<Details />} />
          </Route>
      </Routes>
    </BrowserRouter>
  )
}