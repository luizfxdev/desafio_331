<div align="center">

# 🏎️ Coordenadas do Número Sortudo - Desafio Zamla

![GitHub](https://img.shields.io/github/license/luizfxdev/desafio_331?style=for-the-badge&color=fc0fc0)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Design-fc0fc0?style=for-the-badge)
![Cyberpunk](https://img.shields.io/badge/Theme-Cyberpunk-00ffff?style=for-the-badge)

**Uma aplicação web interativa que resolve problemas de soma de subconjuntos com temática cyberpunk futurista**

[Demo ao Vivo](#) • [Reportar Bug](https://github.com/luizfxdev/desafio_331/issues) • [Solicitar Feature](https://github.com/luizfxdev/desafio_331/issues)

![Preview](https://via.placeholder.com/800x400/0a0518/fc0fc0?text=Zamla+-+Coordenadas+do+N%C3%BAmero+Sortudo)

</div>

---

## 📋 Sobre o Projeto

Em meio às ruas sombrias e iluminadas por neon da **Cidade de Neon**, Zamla se prepara para mais uma corrida ilegal. Esta aplicação resolve um enigma matemático complexo: encontrar o menor número positivo que não pode ser formado como soma de subconjuntos de uma lista dada.

### 🎯 Desafios Resolvidos

1. **Desafio Original**: Encontrar o menor número positivo impossível de formar
2. **Desafio Avançado**: Encontrar o menor múltiplo de K impossível de formar

---

## ✨ Funcionalidades

- 🎨 **Interface Cyberpunk**: Design futurista com cores neon e animações suaves
- 🔢 **Dois Modos de Cálculo**: Desafio original e avançado com múltiplos
- 📊 **Validação Detalhada**: Mostra passo a passo do processo de cálculo
- 🎵 **Áudio Temático**: Controles para música de fundo personalizada
- 🎬 **Background em Vídeo**: Experiência imersiva com vídeo de fundo
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em mobile, tablet e desktop
- ♿ **Acessível**: Navegação por teclado e contraste adequado
- 🎯 **Validação Inteligente**: Tratamento robusto de erros e inputs

---

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Animações, Grid, Flexbox e efeitos neon
- **JavaScript (Vanilla)**: Lógica de cálculo e manipulação do DOM
- **Google Fonts**: Raleway e Orbitron para tipografia cyberpunk

---

## 💡 Aplicações em Projetos Reais

Este algoritmo de soma de subconjuntos tem diversas aplicações práticas no mundo real:

### 💰 Sistemas Financeiros
- **Caixas eletrônicos**: Determinar quais notas/moedas podem ser dispensadas
- **Sistemas de troco**: Otimizar a composição de moedas para dar troco
- **Alocação de recursos**: Verificar se um orçamento pode ser distribuído exatamente

### 📦 Logística e Operações
- **Planejamento de cargas**: Verificar se itens podem preencher exatamente um container
- **Gerenciamento de estoque**: Determinar combinações possíveis de produtos
- **Otimização de rotas**: Calcular distâncias alcançáveis com paradas específicas

### 🎮 Desenvolvimento de Games
- **Sistemas de inventário**: Verificar combinações possíveis de itens
- **Economia do jogo**: Balancear preços e recompensas
- **Progressão de níveis**: Garantir que objetivos sejam alcançáveis

### 🏭 Indústria e Manufatura
- **Planejamento de produção**: Verificar se quantidades podem ser produzidas com recursos disponíveis
- **Controle de qualidade**: Testar combinações de componentes
- **Otimização de processos**: Identificar gargalos na linha de produção

### 🔐 Criptografia e Segurança
- **Geração de chaves**: Criar sequências numéricas com propriedades específicas
- **Análise de vulnerabilidades**: Testar combinações de ataques possíveis
- **Sistemas de autenticação**: Validar códigos de acesso compostos

### 📊 Análise de Dados
- **Data Science**: Identificar padrões em conjuntos de dados
- **Machine Learning**: Feature engineering e seleção de características
- **Estatística**: Análise combinatória de amostras

---

## 🎮 Como Usar

### Entrada de Dados
1. **Lista de Números**: Digite números positivos separados por vírgula
   - Exemplo: `1, 2, 2, 5`
2. **Valor de K**: Digite um número inteiro positivo para o desafio avançado
   - Exemplo: `5`

### Exemplos de Teste
```
Exemplo 1:
Lista: [1, 2, 2, 5]
K: 5
Resultados: 10 e 15

Exemplo 2:
Lista: [1, 1, 1, 1]
K: 3
Resultados: 5 e 15

Exemplo 3:
Lista: [1, 2, 5, 10, 20, 50]
K: 10
Resultados: 4 e 90
```

---

## 🛠️ Instalação Local
```bash
# Clone o repositório
git clone https://github.com/luizfxdev/desafio_331.git

# Entre no diretório
cd desafio_331

# Adicione seus arquivos de mídia
# Coloque background.mp4 e theme.mp3 na pasta assets/

# Abra o index.html em seu navegador
# Ou use um servidor local como Live Server (VS Code)
```

### 📁 Estrutura de Arquivos
```
desafio_331/
│
├── index.html          # Estrutura HTML principal
├── styles.css          # Estilos e animações
├── script.js           # Lógica de cálculo
├── assets/             # Recursos de mídia
│   ├── background.mp4  # Vídeo de fundo
│   └── theme.mp3       # Música tema
└── README.md           # Documentação
```

---

## 🧮 Algoritmo

### Desafio Original - Complexidade O(n)
```javascript
// Para encontrar o menor número impossível:
// 1. Ordena o array
// 2. Mantém controle do maior número alcançável (maxReachable)
// 3. Se o próximo número > maxReachable + 1, encontramos o impossível
// 4. Caso contrário, adiciona ao maxReachable
```

### Desafio Avançado - Complexidade O(n × sum)
```javascript
// Para encontrar o menor múltiplo impossível:
// 1. Gera todas as somas possíveis usando programação dinâmica
// 2. Verifica múltiplos de K sequencialmente
// 3. Retorna o primeiro múltiplo não alcançável
```

---

## 🎨 Personalização

### Cores do Tema
```css
/* Cores principais */
--primary-neon: #fc0fc0;    /* Rosa neon */
--secondary-neon: #00ffff;  /* Ciano neon */
--background: #050801;      /* Preto esverdeado */
```

### Fontes
- **Títulos**: Orbitron (cyberpunk)
- **Corpo**: Raleway (legibilidade)

---

## 📱 Responsividade

- **Desktop**: Container fixo à esquerda com vídeo completo
- **Tablet**: Container centralizado com largura adaptativa
- **Mobile**: Layout vertical com botões em stack

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

**Luiz Felipe de Oliveira**

- GitHub: [@luizfxdev](https://github.com/luizfxdev)
- LinkedIn: [Luiz FX](https://www.linkedin.com/in/luizfxdev)
- Portfólio [luizfxdev.com.br](https://luizfxdev.com.br)

---

## 🙏 Agradecimentos

- Design inspirado em estética cyberpunk e neon
- Tema baseado na personagem Zamla e suas corridas na Cidade de Neon
- Comunidade open source por ferramentas e recursos incríveis

---

<div align="center">

**⚡ Desenvolvido com código e neon por LuizFXdev ⚡**

[⬆ Voltar ao topo](#-coordenadas-do-número-sortudo---desafio-zamla)

</div>


