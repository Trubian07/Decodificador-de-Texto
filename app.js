function validateInput() {
    const input = document.getElementById('text-input').value;
    const errorMessage = document.getElementById('error-message');

    if (/^[a-z\s]+$/.test(input)) {
        errorMessage.textContent = '';
        return true;
    } else {
        errorMessage.textContent = 'Por favor, insira apenas letras minúsculas e sem acento.';
        return false;
    }
}

function encryptText() {
    if (validateInput()) {
        const input = document.getElementById('text-input').value;
        const encryptedText = btoa(input);
        document.getElementById('encrypted-output').value = encryptedText;
        alert('Texto criptografado!');
    }
}

function decryptText() {
    try {
        const input = document.getElementById('encrypted-output').value;
        const decryptedText = atob(input);
        document.getElementById('text-input').value = decryptedText;
        alert('Texto descriptografado!');
    } catch (e) {
        alert('Texto inválido para descriptografia.');
    }
}

function copyToClipboard() {
    const encryptedText = document.getElementById('encrypted-output');
    encryptedText.select();
    document.execCommand('copy');
    alert('Texto criptografado copiado para a área de transferência!');
}