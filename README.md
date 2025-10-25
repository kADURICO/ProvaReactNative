# Fokus - Timer Pomodoro com React Native

Esta é uma aplicação simples desenvolvida com **React Native** (utilizando **Expo**) para demonstrar a construção de um timer funcional completo, baseado na popular técnica Pomodoro.

A aplicação permite ao usuário alternar entre períodos de foco e pausas (curtas e longas), gerenciando o estado do cronômetro (começar/pausar) e atualizando a interface em tempo real.

✨ Funcionalidades
* **Seleção de Modo:** Três botões para alternar facilmente entre os modos: "Foco" (25 min), "Pausa Curta" (5 min) e "Pausa Longa" (15 min).
* **Timer Regressivo:** Um componente de timer visual que exibe a contagem regressiva em minutos e segundos.
* **Controle do Timer:** Botão principal de "Começar"/"Pausar" que altera o estado do cronômetro.
* **Feedback Visual:**
    * O botão de controle exibe ícones de "Play" ou "Pause" e texto correspondente ao estado atual.
    * Uma imagem representativa de cada modo é exibida.
* **Gerenciamento de Estado:** O timer é automaticamente pausado e resetado para o valor inicial correto sempre que o usuário troca de modo.
* **Limpeza de Memória:** Utiliza `useRef` e `useEffect` para garantir que o intervalo (`setInterval`) seja corretamente limpo ao pausar, trocar de modo ou fechar o app, evitando vazamentos de memória.

🚀 Tecnologias Utilizadas
* **React Native**
* **Expo**
* **React** (com Hooks: `useState`, `useRef`, `useEffect`)
* **JavaScript (JSX)**

⚙️ Como Executar

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/seu-usuario/seu-repo-pomodoro](https://github.com/seu-usuario/seu-repo-pomodoro)
    ```
    *(Substitua pelo URL do seu repositório)*

2.  Navegue até a pasta do projeto:
    ```bash
    cd seu-repo-pomodoro
    ```

3.  Instale as dependências:
    ```bash
    npm install
    ```
    *(Ou `yarn install`)*

4.  Execute a aplicação (Expo):
    ```bash
    npx expo start
    ```

5.  Abra o aplicativo **Expo Go** em seu celular e escaneie o QR Code, ou pressione uma das teclas no terminal para abrir em um emulador (Android/iOS) ou no navegador.