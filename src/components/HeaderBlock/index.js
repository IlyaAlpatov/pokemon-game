import s from './style.module.css';

const HeaderBlock = ({ title, descr }) => {
    return (
        <header class={s.root}>
            <div class={s.forest}></div>
            <div class={s.container}>
                {
                    title && (<h1>
                        {title}
                    </h1>)
                }
                {
                    descr && (<p>
                        {descr}
                    </p>)
                }
            </div>
        </header>
    );
}

export default HeaderBlock;