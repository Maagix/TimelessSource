import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Toaster } from "react-hot-toast";
import { ShopProvider } from "./contexts/ShopContext";

import AppLayout from "./ui/AppLayout";
import LandingPage from "./pages/LandingPage";
import PageNotFound from "./pages/PageNotFound";
import Lookbook from "./pages/Lookbook";
import Shop from "./pages/Shop";
import ShoppingCart from "./pages/ShoppingCart";
import Wishlist from "./pages/Wishlist";
import CheckoutForm from "./pages/CheckoutForm";
import ProductPage from "./pages/ProductPage";
import Order from "./pages/Order";
import ScrollToTop from "./utils/ScrollToTop";
import Look from "./pages/Look";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <ScrollToTop />
        <ShopProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<LandingPage />} />
              {/* prettier-ignore */}
              <Route path="/shop/men" element={<Shop section="Men" page="shopByGender" />} />
              <Route
                path="/shop/women"
                element={<Shop section="Women" page="shopByGender" />}
              />
              <Route path="/shop/:id" element={<ProductPage />} />
              <Route path="/lookbook/men" element={<Lookbook type="men" />} />
              {/* prettier-ignore */}
              <Route path="/lookbook/women" element={<Lookbook type="women" />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/cart/checkout/" element={<CheckoutForm />} />
              <Route path="/wishlist" element={<Wishlist />} />
              {/* prettier-ignore */}
              <Route path="/search" element={<Shop section="all" page="search" />} />
              <Route path="/lookbook/men/:id" element={<Look type="m" />} />
              <Route path="/lookbook/women/:id" element={<Look type="w" />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Route>

            <Route path="/order/:orderId" element={<Order />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ShopProvider>
      </BrowserRouter>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
