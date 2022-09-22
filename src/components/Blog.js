import BlogItem from "./BlogItem"

const Blog = () => {
    return (
        <section className="blog">
            <div className="page-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1 className="page-title">Blog</h1>
                            <h2 className="page-description">Te enseñamos todos nuestros secretos</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="page-content">
                <div className="container">
                    <div className="row"> 
                        <BlogItem link="blog-1" title="¿Cómo aseguro el pago de mi inquilino?" />
                        <BlogItem link="blog-2" title="¿Cómo asegurarme de que no caigo en una estafa?" />
                        <BlogItem link="blog-3" title="¿Cómo ahorrarse problemas trabajando con Urban?"/>
                        <BlogItem link="blog-4" title="¿Cómo saber qué precio poner?"/>
                        <BlogItem link="blog-5" title="¿Cómo vender mi piso rápido?"/>
                        <BlogItem link="blog-6" title="¿Es mejor vender sin amueblar o con muebles?"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog