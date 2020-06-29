export const IP_ADDRESS = 'http://192.168.100.98:3333';

/*
Insira o IP e a porta do seu computador no campo acima antes de executar
Para descobrir qual o, abra um terminao/prompt e digite:
ipconfig => Windows
ifconfig => MAC/Linux
E procure pelo campo "Endereço IPv4" no "Adaptador Ethernet" do seu computador.
A porta padrão é a 3333, você pode trocar no arquivo "server.tsx" na linha "app.listen(3333);".
Mas tome cuidado para não causar conflito com outras aplicações.
Por exemplo, muitas aplicações utiliza a porta 8080, então, evite essa, na duvida, deixe 3333.

*/
