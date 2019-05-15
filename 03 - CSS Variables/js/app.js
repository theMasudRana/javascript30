// Select all the inputs
const inputs = document.querySelectorAll('.controls input');

// Change the value of different inputs
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

// Inputs should chnage in this two state
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));