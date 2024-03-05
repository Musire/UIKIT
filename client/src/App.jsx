import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home, Category, Details } from "@/pages"
import { MainLayout } from "@/layouts"

export default function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<MainLayout />} >
          <Route path="home" element={<Home />} />
          <Route path="category/:categoryName" element={<Category />} />
          <Route path="details/:elementId" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}