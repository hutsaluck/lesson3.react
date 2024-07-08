import React from 'react';
import useToggle from "../../hooks/useToggle";
import './about-component.css'

const AboutComponent = () => {
    let {toggle, handleToggle} =  useToggle(false)

    return (
        <div>
            <h2>About</h2>
            <div className="about-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cupiditate doloribus eum incidunt ipsa.
                    Ab accusamus adipisci aliquam architecto consectetur consequuntur dolore eaque eligendi et ex hic
                    impedit libero minima mollitia nemo non, nostrum numquam obcaecati perspiciatis placeat quam sunt
                    tempora vero? Officia, tenetur, veniam. Delectus nostrum possimus quam quos voluptatem. At
                    consectetur est fugiat omnis quis! Accusamus ad adipisci aliquid at commodi corporis cum deserunt
                    eaque earum esse eum eveniet expedita facere fugiat inventore ipsa itaque iusto laboriosam
                    laudantium maxime minus mollitia nihil officia, omnis placeat praesentium quaerat quam quasi quidem
                    temporibus tenetur totam ut veniam voluptate voluptatem voluptates.</p>
                <p className={toggle ? `show` : `hidden`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                    asperiores assumenda, at atque autem beatae doloribus eligendi est eum facilis magni maiores, modi
                    molestiae nisi numquam optio perferendis quasi repudiandae tenetur totam. Adipisci animi asperiores
                    aut blanditiis dolorem, dolores ducimus eligendi facilis illum impedit iste, iusto laboriosam
                    maxime, minima molestiae necessitatibus nesciunt nihil nisi perferendis quaerat quam qui quidem
                    quisquam quod ratione recusandae sapiente soluta sunt suscipit tempore temporibus vero vitae
                    voluptatem. Ad adipisci assumenda at aut, autem commodi cupiditate ducimus eligendi, esse
                    exercitationem facere illum in ipsa ipsam iure iusto labore magni minus molestias nobis nostrum
                    obcaecati odio officiis perferendis quaerat quasi qui quibusdam quis quisquam reiciendis repudiandae
                    sunt temporibus tenetur unde vero, voluptatem voluptates. Aliquid consequatur corporis deserunt
                    doloribus ducimus enim et harum ipsa nihil numquam odio odit perspiciatis, quibusdam reprehenderit
                    repudiandae sapiente, tempora ullam unde voluptate voluptates. Accusantium adipisci ex explicabo
                    nesciunt nisi, provident voluptate! Accusamus at aut beatae culpa cupiditate delectus dolores esse,
                    fuga minima minus modi, nostrum pariatur quisquam sit tempora tenetur velit? Aperiam autem
                    cupiditate debitis, dolorem doloribus ducimus error exercitationem facere facilis impedit incidunt
                    magni minima modi nobis, quisquam quo reiciendis repellendus sapiente similique soluta temporibus
                    ullam ut, veritatis! A amet cumque deleniti eius error et, expedita explicabo harum hic illum ipsam
                    minima numquam obcaecati optio quidem ratione ullam unde vitae voluptas voluptatibus? Deserunt magni
                    placeat voluptatibus. Commodi cupiditate debitis eligendi et fugit, hic laudantium, libero nisi
                    nostrum ratione sunt tenetur, unde! Alias aliquam architecto deleniti dicta dignissimos doloremque
                    doloribus labore magnam nihil obcaecati quam quia quibusdam reiciendis, saepe sunt vitae voluptates
                    voluptatibus? Accusamus ex excepturi minima mollitia optio possimus voluptate. Aliquid aspernatur
                    doloribus enim expedita harum iste odit voluptas voluptatem, voluptatum? Ab aliquid corporis cumque
                    eos esse, exercitationem inventore iste, maxime numquam quas qui ratione sequi? A accusamus
                    accusantium, alias beatae deserunt dignissimos doloremque eius eos fuga harum illum inventore
                    laborum libero magni minima, mollitia natus nisi nulla officiis omnis perferendis perspiciatis
                    possimus quia reprehenderit sed soluta tempora tempore unde vitae voluptatibus? Accusamus alias
                    animi aperiam autem blanditiis commodi consectetur ducimus in inventore ipsum laudantium natus non
                    perspiciatis placeat quisquam quos reiciendis sequi, tenetur vel voluptatibus! Atque commodi ea,
                    eligendi et id in maiores nemo perspiciatis reiciendis repellat. Adipisci atque consequuntur dolorem
                    doloremque dolorum exercitationem fugiat iusto magni nemo nesciunt omnis perferendis possimus quas
                    quidem quo, sequi, vitae! Accusantium adipisci autem culpa explicabo, harum, illo in, ipsam
                    molestias natus necessitatibus provident sunt.</p>
                <button onClick={handleToggle}>{!toggle ? `More...` : `Less`}</button>
            </div>
        </div>
    );
};

export default AboutComponent;