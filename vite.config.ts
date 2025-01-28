import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    //host: true, 
    allowedHosts: ['4954-105-113-57-148.ngrok-free.app'], 
    // port: 3000, // You can specify the port
  },
  
})
