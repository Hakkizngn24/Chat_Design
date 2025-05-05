
export const FirstPage = () => {
    const handleRipple = (e) => {
        const button = e.currentTarget;
        const circle = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${e.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${e.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add("ripple");

        const ripple = button.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    };
    return (
        <>
            <div className="nav">
                <nav className="navbar">
                    <div className="logo">
                        <a href="#"><img src="src/image/ChatAppLogo.jpg" alt="LakLakEt"/><p className="logoText"></p></a>
                    </div>
                    <ul className={"nav_ul"}>
                        <li className={"nav_li"}>
                            <a className={"nav_a"} href="#" onClick={handleRipple}>Giriş Yap</a>
                        </li>
                        <li className={"nav_li"}>
                            <a className={"nav_a"} href="#" onClick={handleRipple}>Kayıt Ol</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="body">
                <div className="image">
                    <p className={"name"}>LakLakEt</p>
                    <p className={"slogan"}>Samimi, sıcak ve eğlenceli mesajlaşmanın yeni adresi.</p>
                </div>
            </div>
            <div className="bottom">
                <p>© 2025 Created by <strong>Hüseyin Sayım</strong></p>
                <p>All rights reserved. Copying is prohibited.</p>
            </div>
        </>
    )
}