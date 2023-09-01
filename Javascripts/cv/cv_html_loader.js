const main = document.querySelector('main');
const styleDiv = document.getElementById('stylesheetContainer');

export function cvHtmlLoad() {
    styleDiv.innerHTML = `<link rel="stylesheet" href="./Stylesheets/cv.css">`;
    main.innerHTML = `<div class="aboutMe-div flexbox">
    <p class="aboutMe-titel agency">Jan Lehner</p>
    <p class="aboutMe-text twCen">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit exercitationem
        neque minus veniam quas, necessitatibus voluptatibus eius eum iure non blanditiis placeat alias qui
        corrupti officiis hic recusandae quos doloribus error numquam illo? Fugiat, in! Quas vel omnis
        eligendi adipisci porro optio delectus quasi nulla quia. Quis, pariatur. Ducimus assumenda quam
        nihil neque itaque eos quia suscipit illo asperiores voluptates. Fugiat repellendus quod rem ipsam
        tempore, esse explicabo ullam accusantium iure excepturi ducimus quos animi libero tenetur sed magni
        cumque voluptate corporis. Magni ipsum impedit autem voluptatibus repudiandae? Labore, sed itaque.
        Error facere, ducimus illo eius et praesentium facilis laboriosam natus doloremque eum
        necessitatibus corporis minima rerum ad tempore numquam sed saepe distinctio sit iusto, amet ut vero
        ipsum. Illo.</p>
    <img class="aboutMe-img" src="./Images/aboutMe_picture.jpg" alt="picture of me">
</div>

<div class="flexbox" id="timelineContainer">
    <div class="flexbox timelineRow-Line">
        <div class="flexbox timelineBlock line-block-left"></div>
        <div class="hiddenLine flexbox timelineBlock line-block-center"></div>
        <div class="flexbox timelineBlock line-block-right"></div>
    </div>
    <div class="hiddenFadeFR flexbox timelineRow-Content-right">
        <div class="flexbox timelineBlock content-block-left content-block-empty"></div>
        <div class="flexbox timelineBlock content-block-center"><svg class="svg" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M14.0184 7.36446C14.1256 6.96436 13.8882 6.55311 13.4881 6.4459C13.088 6.3387 12.6767 6.57614 12.5695 6.97623L9.98131 16.6355C9.8741 17.0356 10.1115 17.4468 10.5116 17.5541C10.9117 17.6613 11.323 17.4238 11.4302 17.0237L14.0184 7.36446Z"
                        fill="#a5c5e6"></path>
                    <path
                        d="M16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967C14.6768 8.76256 14.6768 9.23744 14.9697 9.53033L15.1412 9.7019C15.8229 10.3836 16.2797 10.8426 16.5753 11.2301C16.8577 11.6002 16.9216 11.8157 16.9216 12C16.9216 12.1843 16.8577 12.3998 16.5753 12.7699C16.2797 13.1574 15.8229 13.6164 15.1412 14.2981L14.9697 14.4697C14.6768 14.7626 14.6768 15.2374 14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303L16.2387 15.322C16.874 14.6867 17.4038 14.1569 17.7678 13.6798C18.1521 13.1762 18.4216 12.6441 18.4216 12C18.4216 11.3559 18.1521 10.8238 17.7678 10.3202C17.4038 9.84307 16.874 9.31331 16.2387 8.67801L16.0303 8.46967Z"
                        fill="#a5c5e6"></path>
                    <path
                        d="M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76256 9.32341 9.23744 9.03052 9.53033L8.85894 9.7019C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12618 14.6867 6.59637 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59637 9.84307 7.12617 9.31332 7.7615 8.67802L7.96986 8.46967Z"
                        fill="#a5c5e6"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                        fill="#a5c5e6"></path>
                </g>
            </svg></div>
        <div class="flexbox timelineBlock content-block-right">
            <p class="timelineTitle titleRight agency">Titel | 15.06.2005</p>
            <p class="timelineText textRight twCen">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ea corrupti nulla distinctio ad iste? Ipsa magni odio ea accusantium velit
                adipisci debitis a recusandae nesciunt, placeat nobis reiciendis maxime eveniet quo autem
                reprehenderit optio soluta perferendis dignissimos unde magnam ratione, veritatis eum
                sapiente.
                Doloremque omnis quos maiores laudantium, modi sed fugiat aliquam! Dolore dolor eum optio
                tempora eveniet repellendus totam odio aliquid repudiandae quisquam architecto provident
                quasi
                ducimus est, hic maxime saepe exercitationem veniam quidem. Laudantium eum rerum totam
                culpa! Ad
                veniam nesciunt eum sint quisquam maiores quia minima alias tempora nisi molestiae
                cupiditate
                dolores iure, vel similique libero. Beatae provident fugit eius? Ab deserunt eaque sapiente
                assumenda, unde adipisci nostrum consequatur sequi ipsum voluptates, tempora ea aliquam fuga
                inventore neque. Eveniet eos dignissimos ab saepe aliquid optio iusto velit aliquam iste
                iure?
                Voluptates praesentium aliquam culpa sequi voluptatem voluptatum, voluptatibus laborum id
                fuga
                perspiciatis ab sit beatae assumenda voluptas vitae obcaecati cumque fugit et ratione ipsam
                consectetur minus quidem, nisi repellendus? Aperiam reprehenderit dicta tempore
                necessitatibus
                ex, dolores ipsam porro ut enim odio amet exercitationem nam voluptas itaque provident natus
                expedita consequuntur? Harum reprehenderit dolorum commodi totam ipsam, nostrum explicabo
                omnis
                autem corrupti veritatis minima numquam alias exercitationem quo repudiandae, doloribus
                suscipit
                eos eum.</p>
        </div>
    </div>
    <div class="flexbox timelineRow-Line">
        <div class="flexbox timelineBlock line-block-left"></div>
        <div class="hiddenLine flexbox timelineBlock line-block-center"></div>
        <div class="flexbox timelineBlock line-block-right"></div>
    </div>
    <div class="hiddenFadeFL flexbox timelineRow-Content-left">
        <div class="flexbox timelineBlock content-block-left">
            <p class="timelineTitle titleLeft agency">Titel | 15.06.2005</p>
            <p class="timelineText textLeft twCen">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ea corrupti nulla distinctio ad iste? Ipsa magni odio ea accusantium velit
                adipisci debitis a recusandae nesciunt, placeat nobis reiciendis maxime eveniet quo autem
                reprehenderit optio soluta perferendis dignissimos unde magnam ratione, veritatis eum
                sapiente.
                Doloremque omnis quos maiores laudantium, modi sed fugiat aliquam! Dolore dolor eum optio
                tempora eveniet repellendus totam odio aliquid repudiandae quisquam architecto provident
                quasi
                ducimus est, hic maxime saepe exercitationem veniam quidem. Laudantium eum rerum totam
                culpa! Ad
                veniam nesciunt eum sint quisquam maiores quia minima alias tempora nisi molestiae
                cupiditate
                dolores iure, vel similique libero. Beatae provident fugit eius? Ab deserunt eaque sapiente
                assumenda, unde adipisci nostrum consequatur sequi ipsum voluptates, tempora ea aliquam fuga
                inventore neque. Eveniet eos dignissimos ab saepe aliquid optio iusto velit aliquam iste
                iure?
                Voluptates praesentium aliquam culpa sequi voluptatem voluptatum, voluptatibus laborum id
                fuga
                perspiciatis ab sit beatae assumenda voluptas vitae obcaecati cumque fugit et ratione ipsam
                consectetur minus quidem, nisi repellendus? Aperiam reprehenderit dicta tempore
                necessitatibus
                ex, dolores ipsam porro ut enim odio amet exercitationem nam voluptas itaque provident natus
                expedita consequuntur? Harum reprehenderit dolorum commodi totam ipsam, nostrum explicabo
                omnis
                autem corrupti veritatis minima numquam alias exercitationem quo repudiandae, doloribus
                suscipit
                eos eum.</p>
        </div>
        <div class="flexbox timelineBlock content-block-center"><svg class="svg" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M14.0184 7.36446C14.1256 6.96436 13.8882 6.55311 13.4881 6.4459C13.088 6.3387 12.6767 6.57614 12.5695 6.97623L9.98131 16.6355C9.8741 17.0356 10.1115 17.4468 10.5116 17.5541C10.9117 17.6613 11.323 17.4238 11.4302 17.0237L14.0184 7.36446Z"
                        fill="#a5c5e6"></path>
                    <path
                        d="M16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967C14.6768 8.76256 14.6768 9.23744 14.9697 9.53033L15.1412 9.7019C15.8229 10.3836 16.2797 10.8426 16.5753 11.2301C16.8577 11.6002 16.9216 11.8157 16.9216 12C16.9216 12.1843 16.8577 12.3998 16.5753 12.7699C16.2797 13.1574 15.8229 13.6164 15.1412 14.2981L14.9697 14.4697C14.6768 14.7626 14.6768 15.2374 14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303L16.2387 15.322C16.874 14.6867 17.4038 14.1569 17.7678 13.6798C18.1521 13.1762 18.4216 12.6441 18.4216 12C18.4216 11.3559 18.1521 10.8238 17.7678 10.3202C17.4038 9.84307 16.874 9.31331 16.2387 8.67801L16.0303 8.46967Z"
                        fill="#a5c5e6"></path>
                    <path
                        d="M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76256 9.32341 9.23744 9.03052 9.53033L8.85894 9.7019C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12618 14.6867 6.59637 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59637 9.84307 7.12617 9.31332 7.7615 8.67802L7.96986 8.46967Z"
                        fill="#a5c5e6"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                        fill="#a5c5e6"></path>
                </g>
            </svg></div>
        <div class="flexbox timelineBlock content-block-right content-block-empty"></div>
    </div>
    <div class="flexbox timelineRow-Line">
        <div class="flexbox timelineBlock line-block-left"></div>
        <div class="hiddenLine flexbox timelineBlock line-block-center"></div>
        <div class="flexbox timelineBlock line-block-right"></div>
    </div>
    <div class="hiddenFadeFR flexbox timelineRow-Content-right">
        <div class="flexbox timelineBlock content-block-left content-block-empty"></div>
        <div class="flexbox timelineBlock content-block-center"><svg class="svg" viewBox="0 0 24 24"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M14.0184 7.36446C14.1256 6.96436 13.8882 6.55311 13.4881 6.4459C13.088 6.3387 12.6767 6.57614 12.5695 6.97623L9.98131 16.6355C9.8741 17.0356 10.1115 17.4468 10.5116 17.5541C10.9117 17.6613 11.323 17.4238 11.4302 17.0237L14.0184 7.36446Z"
                        fill="#a5c5e6"></path>
                    <path
                        d="M16.0303 8.46967C15.7374 8.17678 15.2626 8.17678 14.9697 8.46967C14.6768 8.76256 14.6768 9.23744 14.9697 9.53033L15.1412 9.7019C15.8229 10.3836 16.2797 10.8426 16.5753 11.2301C16.8577 11.6002 16.9216 11.8157 16.9216 12C16.9216 12.1843 16.8577 12.3998 16.5753 12.7699C16.2797 13.1574 15.8229 13.6164 15.1412 14.2981L14.9697 14.4697C14.6768 14.7626 14.6768 15.2374 14.9697 15.5303C15.2626 15.8232 15.7374 15.8232 16.0303 15.5303L16.2387 15.322C16.874 14.6867 17.4038 14.1569 17.7678 13.6798C18.1521 13.1762 18.4216 12.6441 18.4216 12C18.4216 11.3559 18.1521 10.8238 17.7678 10.3202C17.4038 9.84307 16.874 9.31331 16.2387 8.67801L16.0303 8.46967Z"
                        fill="#a5c5e6"></path>
                    <path
                        d="M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76256 9.32341 9.23744 9.03052 9.53033L8.85894 9.7019C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12618 14.6867 6.59637 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59637 9.84307 7.12617 9.31332 7.7615 8.67802L7.96986 8.46967Z"
                        fill="#a5c5e6"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.9426 1.25C9.63423 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63423 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25H11.9426ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62178 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62178 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62178 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62178 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                        fill="#a5c5e6"></path>
                </g>
            </svg></div>
        <div class="flexbox timelineBlock content-block-right">
            <p class="timelineTitle titleRight agency">Titel | 15.06.2005</p>
            <p class="timelineText textRight twCen">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Ea corrupti nulla distinctio ad iste? Ipsa magni odio ea accusantium velit
                adipisci debitis a recusandae nesciunt, placeat nobis reiciendis maxime eveniet quo autem
                reprehenderit optio soluta perferendis dignissimos unde magnam ratione, veritatis eum
                sapiente.
                Doloremque omnis quos maiores laudantium, modi sed fugiat aliquam! Dolore dolor eum optio
                tempora eveniet repellendus totam odio aliquid repudiandae quisquam architecto provident
                quasi
                ducimus est, hic maxime saepe exercitationem veniam quidem. Laudantium eum rerum totam
                culpa! Ad
                veniam nesciunt eum sint quisquam maiores quia minima alias tempora nisi molestiae
                cupiditate
                dolores iure, vel similique libero. Beatae provident fugit eius? Ab deserunt eaque sapiente
                assumenda, unde adipisci nostrum consequatur sequi ipsum voluptates, tempora ea aliquam fuga
                inventore neque. Eveniet eos dignissimos ab saepe aliquid optio iusto velit aliquam iste
                iure?
                Voluptates praesentium aliquam culpa sequi voluptatem voluptatum, voluptatibus laborum id
                fuga
                perspiciatis ab sit beatae assumenda voluptas vitae obcaecati cumque fugit et ratione ipsam
                consectetur minus quidem, nisi repellendus? Aperiam reprehenderit dicta tempore
                necessitatibus
                ex, dolores ipsam porro ut enim odio amet exercitationem nam voluptas itaque provident natus
                expedita consequuntur? Harum reprehenderit dolorum commodi totam ipsam, nostrum explicabo
                omnis
                autem corrupti veritatis minima numquam alias exercitationem quo repudiandae, doloribus
                suscipit
                eos eum.</p>
        </div>
    </div>
    <div class="flexbox timelineRow-Line">
        <div class="flexbox timelineBlock line-block-left"></div>
        <div class="hiddenLine flexbox timelineBlock line-block-center"></div>
        <div class="flexbox timelineBlock line-block-right"></div>
    </div>
</div>`;
}