import { VStack } from 'native-base';

import { ItemsCart } from '../components/ItemsCart';
import { ScreenHeader } from '../components/ScreenHeader';

export function Cart() {
  return (
    // adiciona os produtos selecionados no carrinho
    <VStack flex={1}>
      <ScreenHeader title="Carrinho" />
      <ItemsCart />
    </VStack>
  );
}