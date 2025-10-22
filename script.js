// Audio elements
const themeAudio = document.getElementById('theme-audio');
const playAudioBtn = document.getElementById('play-audio');
const pauseAudioBtn = document.getElementById('pause-audio');

// Input elements
const numbersInput = document.getElementById('numbers-input');
const kInput = document.getElementById('k-input');

// Button elements
const calculateBtn = document.getElementById('calculate-btn');
const returnBtn = document.getElementById('return-btn');

// Result section
const resultSection = document.getElementById('result-section');
const resultContent = document.getElementById('result-content');

// Audio controls
playAudioBtn.addEventListener('click', () => {
  themeAudio.play();
});

pauseAudioBtn.addEventListener('click', () => {
  themeAudio.pause();
});

// Calculate button event
calculateBtn.addEventListener('click', () => {
  calculateResults();
});

// Return button event
returnBtn.addEventListener('click', () => {
  resetForm();
});

// Enter key support for inputs
numbersInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    calculateResults();
  }
});

kInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    calculateResults();
  }
});

// Main calculation function
function calculateResults() {
  // Get and validate input
  const numbersStr = numbersInput.value.trim();
  const kValue = parseInt(kInput.value);

  if (!numbersStr) {
    showError('Por favor, insira a lista de números.');
    return;
  }

  if (!kValue || kValue <= 0) {
    showError('Por favor, insira um valor válido para K.');
    return;
  }

  // Parse numbers
  const numbers = numbersStr
    .split(',')
    .map(n => parseInt(n.trim()))
    .filter(n => !isNaN(n) && n > 0);

  if (numbers.length === 0) {
    showError('Nenhum número válido foi encontrado na lista.');
    return;
  }

  // Sort numbers
  numbers.sort((a, b) => a - b);

  // Calculate results
  const smallestImpossible = findSmallestImpossible(numbers);
  const smallestMultiple = findSmallestImpossibleMultiple(numbers, kValue);

  // Display results
  displayResults(numbers, kValue, smallestImpossible, smallestMultiple);
}

// Find smallest impossible sum
function findSmallestImpossible(arr) {
  let maxReachable = 0;
  const steps = [];

  steps.push({
    title: 'Iniciando Análise',
    description: `Lista ordenada: [${arr.join(', ')}]`,
    detail: 'Começamos com maxReachable = 0'
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > maxReachable + 1) {
      steps.push({
        title: `Passo ${i + 1}`,
        description: `Número atual: ${arr[i]}`,
        detail: `${arr[i]} > ${maxReachable + 1}, portanto ${maxReachable + 1} não pode ser formado`
      });
      break;
    }

    steps.push({
      title: `Passo ${i + 1}`,
      description: `Número atual: ${arr[i]}`,
      detail: `${arr[i]} ≤ ${maxReachable + 1}, atualizando maxReachable: ${maxReachable} + ${arr[i]} = ${
        maxReachable + arr[i]
      }`
    });

    maxReachable += arr[i];
  }

  return {
    result: maxReachable + 1,
    steps: steps
  };
}

// Find smallest impossible multiple of k
function findSmallestImpossibleMultiple(arr, k) {
  const maxSum = arr.reduce((a, b) => a + b, 0);
  const reachable = new Array(maxSum + 1).fill(false);
  reachable[0] = true;

  const steps = [];
  steps.push({
    title: 'Iniciando Análise de Múltiplos',
    description: `Lista: [${arr.join(', ')}], K = ${k}`,
    detail: `Soma máxima possível: ${maxSum}`
  });

  // Generate all possible sums
  for (let num of arr) {
    for (let i = maxSum; i >= num; i--) {
      if (reachable[i - num]) {
        reachable[i] = true;
      }
    }
  }

  steps.push({
    title: 'Somas Possíveis Calculadas',
    description: 'Verificando múltiplos de K...',
    detail: `Buscando o menor múltiplo de ${k} que não pode ser formado`
  });

  // Find smallest multiple of k that cannot be formed
  let result = k;
  let multiplesChecked = [];

  while (result <= maxSum + k) {
    if (result <= maxSum && !reachable[result]) {
      multiplesChecked.push(`${result} ✗`);
      steps.push({
        title: 'Múltiplo Impossível Encontrado',
        description: `Verificados: ${multiplesChecked.join(', ')}`,
        detail: `${result} é múltiplo de ${k} e não pode ser formado`
      });
      break;
    } else if (result <= maxSum) {
      multiplesChecked.push(`${result} ✓`);
    }
    result += k;
  }

  if (result > maxSum) {
    steps.push({
      title: 'Análise Completa',
      description: `Todos os múltiplos até ${maxSum} podem ser formados`,
      detail: `Primeiro múltiplo impossível: ${result}`
    });
  }

  return {
    result: result,
    steps: steps
  };
}

// Display results with detailed steps
function displayResults(numbers, k, impossibleData, multipleData) {
  let html = '<div class="calculation-process">';

  // Original challenge
  html += '<div class="calculation-step">';
  html += '<h3>🔍 DESAFIO ORIGINAL - Menor Número Impossível</h3>';
  impossibleData.steps.forEach(step => {
    html += `<p><strong>${step.title}:</strong> ${step.description}</p>`;
    html += `<p style="padding-left: 15px; color: #00ffff;">${step.detail}</p>`;
  });
  html += '</div>';

  // Advanced challenge
  html += '<div class="calculation-step">';
  html += '<h3>🔍 DESAFIO AVANÇADO - Menor Múltiplo Impossível</h3>';
  multipleData.steps.forEach(step => {
    html += `<p><strong>${step.title}:</strong> ${step.description}</p>`;
    html += `<p style="padding-left: 15px; color: #00ffff;">${step.detail}</p>`;
  });
  html += '</div>';

  // Final results
  html += '<div class="final-result">';
  html += '<h3>⚡ COORDENADAS DECODIFICADAS ⚡</h3>';
  html += `<p>Lista: [${numbers.join(', ')}]</p>`;
  html += `<p>Valor de K: ${k}</p>`;
  html += `<p>Menor número impossível: <strong>${impossibleData.result}</strong></p>`;
  html += `<p>Menor múltiplo de ${k} impossível: <strong>${multipleData.result}</strong></p>`;
  html += '</div>';

  html += '</div>';

  resultContent.innerHTML = html;
  resultSection.classList.add('active');

  // Scroll to results
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Show error message
function showError(message) {
  const html = `<div class="error-message">⚠️ ${message}</div>`;
  resultContent.innerHTML = html;
  resultSection.classList.add('active');
  resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Reset form
function resetForm() {
  numbersInput.value = '';
  kInput.value = '';
  resultContent.innerHTML = '';
  resultSection.classList.remove('active');
  numbersInput.focus();
}
