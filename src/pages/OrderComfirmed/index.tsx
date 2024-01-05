import { OrderConfirmedContainer, OrderDetailsContainer } from "./styled";
import { RegularText, TitleText } from './../../components/Typography';
import confirmedOrderIllustration from "./../../assets/illustration.svg";
import { InfoWithIcon } from './../../components/InfoWithIcon/index'; 
import {MapPin , Clock , CurrencyDollar} from "phosphor-react"
import { useTheme } from "styled-components";

export function OrderComfirmedPage() {
  const { colors } = useTheme();
  return (
    <OrderConfirmedContainer className="container">
        <div>
            <TitleText size="l">Uhuu! Pedido confirmado</TitleText>

            <RegularText size="l" color="subtitle">
                Agora é só aguardar que logo o café chegará até você
            </RegularText>

        </div>
        <section>
          <OrderDetailsContainer>
            <InfoWithIcon
              icon={<MapPin weight="fill" />}
              iconBg={colors["brand-purple"]}
              text={
                <RegularText>
                  Entrega em <strong>Rua Dom Bosco n°60</strong> 
                  <br/>
                  Vale dos lagos - Salvador , BA
                </RegularText>
              
              }
            />
            <InfoWithIcon
              icon={<Clock weight="fill" />}
              iconBg={colors["brand-yellow"]}
              text={
                <RegularText>
                  Previsão de entrega
                  <br/>
                  <strong>20 min - 30 min</strong>
                </RegularText>
              
              }
            />
            <InfoWithIcon
              icon={<CurrencyDollar weight="fill" />}
              iconBg={colors["brand-yellow-dark"]}
              text={
                <RegularText>
                  Pagamento na entrega
                  <br/>
                  <strong>Cartão de Crédito</strong>
                </RegularText>
              
              }
            />
          </OrderDetailsContainer>
            <img src={confirmedOrderIllustration}/> 
        </section>
    </OrderConfirmedContainer>
  );
}