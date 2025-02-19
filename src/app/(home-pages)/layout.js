import Footer from '@/components/common/footer/footer'
import Header from '@/components/common/header/header'
import "./layout.scss";

const layout = ({ children }) => {
  return (
    <div className="home_layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout