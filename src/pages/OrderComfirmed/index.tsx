import { OrderComfirmedContainer } from "./styled";
import { RegularText, TitleText } from './../../components/Typography';

export function OrderComfirmedPage() {
  return (
    <OrderComfirmedContainer className="container">
        <div>
            <TitleText size="l">Uhuu! Pedido confirmado</TitleText>

            <RegularText size="l" color="subtitle">
                Agora é só aguardar que logo o café chegará até você
            </RegularText>

        </div>
        <section>
            {/* //TODO: colocar imagem do café */}
            <img src={}/>
        </section>
    </OrderComfirmedContainer>
  );
}