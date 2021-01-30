import s from './style.module.css';


const LayoutBlock = ({ id, title, descr, urlBg, colorBg}) => {
    const descFull = s.desc + '' + s.full;

    const styleBg = {
        backgroundColor: "#ff7744",
        backgroundImage: `url(${urlBg})`
    };


    return (
        <section 
        class={s.root} 
        id={id} 
        style = {styleBg}>
            <div class={s.wrapper}>
                <article>
                    <div class={s.title}>
                        {
                            title && (<h3> 
                                {title} 
                            </h3>)
                        }
                        <span class={s.separator}></span>
                    </div>
                    <div class={descFull}>
                        {
                            descr && (<p> 
                                {descr} 
                            </p>)
                        }
                    </div>
                </article>
            </div>
        </section>
    );
}

export default LayoutBlock;