import { Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { PetRegister } from './pages/PetRegister'


export function Router() {
  return (
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cadastro-animal" element={<PetRegister />} />
    </Routes>
  )
}
