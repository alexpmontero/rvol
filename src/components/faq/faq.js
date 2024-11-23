"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

export const Faq = () => {
  return (
    <div className="wrapper_faq">
      <div className="container mx-auto">
        <h2 className="text-4xl sm:text-5xl fnt_bold mb-3 text-center max-w-screen-sm mx-auto">
          ¿Tienes alguna <span className="highlighted">pregunta</span>?
        </h2>
        <div className="contain_faq my-14 max-w-screen-sm mx-auto">
          <Accordion variant="splitted">
            <AccordionItem
              key="1"
              aria-label="faq 1"
              className="mb-1"
              title="¿Por qué comprar Red Voucher Online"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo rem
              neque quia corrupti perferendis, itaque dicta, possimus sunt
              beatae voluptas molestiae nisi cupiditate distinctio sint fugit
              repudiandae nemo vel sapiente excepturi nobis, dolores accusamus.
              Quibusdam voluptatibus delectus ea fugit, quis nulla atque!
              Consectetur deserunt nesciunt perspiciatis debitis tempora. Illo,
              distinctio nobis tempore ad a libero repudiandae, temporibus, quam
              atque aut cupiditate sunt facilis.
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="faq 2"
              className="mb-1"
              title="¿En qué momento recibiré mis voucher?"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo rem
              neque quia corrupti perferendis, itaque dicta, possimus sunt
              beatae voluptas molestiae nisi cupiditate distinctio sint fugit
              repudiandae nemo vel sapiente excepturi nobis, dolores accusamus.
              Quibusdam voluptatibus delectus ea fugit, quis nulla atque!
              Consectetur deserunt nesciunt perspiciatis debitis tempora. Illo,
              distinctio nobis tempore ad a libero repudiandae, temporibus, quam
              atque aut cupiditate sunt facilis.
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="faq 3"
              className="mb-1"
              title="¿Qué métodos de pago se aceptan en Red Voucher Online? "
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo rem
              neque quia corrupti perferendis, itaque dicta, possimus sunt
              beatae voluptas molestiae nisi cupiditate distinctio sint fugit
              repudiandae nemo vel sapiente excepturi nobis, dolores accusamus.
              Quibusdam voluptatibus delectus ea fugit, quis nulla atque!
              Consectetur deserunt nesciunt perspiciatis debitis tempora. Illo,
              distinctio nobis tempore ad a libero repudiandae, temporibus, quam
              atque aut cupiditate sunt facilis.
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};
