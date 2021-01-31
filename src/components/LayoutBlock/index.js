import s from './style.module.css';


const LayoutBlock = ({ id, title, urlBg, colorBg, children}) => {
    const styleBg = {
        backgroundColor: "#ff7744",
        backgroundImage: `url(${urlBg})`
    };


    return (
        <section 
        className={s.root} 
        id={id} 
        style = {styleBg}>
            <div className={s.wrapper}>
                <article>
                    <div className={s.title}>
                        {
                            title && (<h3> 
                                {title} 
                            </h3>)
                        }
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        {children}
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LayoutBlock;