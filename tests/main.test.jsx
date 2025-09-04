// tests/main.test.jsx
// Simula o elemento root no DOM
document.body.innerHTML = '<div id="root"></div>';

let mockRender;

jest.mock('react-dom/client', () => {
  mockRender = jest.fn();
  return {
    createRoot: jest.fn(() => ({
      render: mockRender,
    })),
  };
});

describe('main.jsx', () => {
  test('inicializa a aplicação sem erros', () => {
    require('../src/main.jsx'); // importa e executa o arquivo
    const rootElement = document.getElementById('root');
    expect(rootElement).not.toBeNull();
    expect(mockRender).toHaveBeenCalled();
  });
});