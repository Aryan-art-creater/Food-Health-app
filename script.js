document.addEventListener('DOMContentLoaded', () => {
    const calcForm = document.getElementById('bmi-form');
    const resultDiv = document.getElementById('calc-result');
    const bmiValue = document.getElementById('bmi-value');
    const bmiText = document.getElementById('bmi-text');

    calcForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const weight = parseFloat(document.getElementById('weight').value);
        const heightInputs = document.getElementById('height').value; // let's assume cm
        const height = parseFloat(heightInputs) / 100;

        if (weight > 0 && height > 0) {
            const bmi = (weight / (height * height)).toFixed(1);
            bmiValue.textContent = bmi;
            
            let status = '';
            let color = '';
            if(bmi < 18.5) {
                status = 'Underweight';
                color = '#38bdf8'; // blue
            } else if(bmi >= 18.5 && bmi <= 24.9) {
                status = 'Normal weight';
                color = '#10b981'; // green
            } else if(bmi >= 25 && bmi <= 29.9) {
                status = 'Overweight';
                color = '#f59e0b'; // orange
            } else {
                status = 'Obese';
                color = '#ef4444'; // red
            }
            
            bmiValue.style.color = color;
            bmiText.textContent = status;
            resultDiv.classList.add('show');
        }
    });

    // Smooth scrolling for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal Logic
    const loginBtn = document.getElementById('login-btn');
    const loginModal = document.getElementById('login-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (loginBtn && loginModal && closeModalBtn) {
        loginBtn.addEventListener('click', (e) => {
            e.preventDefault();
            loginModal.classList.add('show-modal');
        });

        closeModalBtn.addEventListener('click', () => {
            loginModal.classList.remove('show-modal');
        });

        // Close when clicking outside of modal content
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.classList.remove('show-modal');
            }
        });
    }

    // Handle dummy login submission
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = loginForm.querySelector('.login-submit-btn');
            const originalText = btn.textContent;
            btn.textContent = 'Logging in...';
            
            setTimeout(() => {
                btn.textContent = 'Success!';
                btn.style.background = '#10b981';
                setTimeout(() => {
                    loginModal.classList.remove('show-modal');
                    btn.textContent = originalText;
                    btn.style.background = ''; // reset
                    loginForm.reset();
                }, 1000);
            }, 1000);
        });
    }

    // Kcal Tracker Logic
    const foodForm = document.getElementById('food-form');
    const foodNameInput = document.getElementById('food-name');
    const foodKcalInput = document.getElementById('food-kcal');
    const foodList = document.getElementById('food-list');
    const kcalProgressRing = document.getElementById('kcal-progress');
    const currentKcalText = document.getElementById('current-kcal');
    
    let totalKcal = 0;
    const GOAL_KCAL = 2000;
    const CIRCLE_CIRCUMFERENCE = 534; // 2 * Math.PI * 85 ~= 534

    function updateProgress() {
        if (!kcalProgressRing) return;
        const percentage = Math.min((totalKcal / GOAL_KCAL), 1);
        const dashOffset = CIRCLE_CIRCUMFERENCE - (percentage * CIRCLE_CIRCUMFERENCE);
        kcalProgressRing.style.strokeDashoffset = dashOffset;
        currentKcalText.textContent = totalKcal;

        if (totalKcal > GOAL_KCAL) {
            kcalProgressRing.style.stroke = '#ef4444'; // Red
            currentKcalText.style.background = 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)';
            currentKcalText.style.webkitBackgroundClip = 'text';
            currentKcalText.style.backgroundClip = 'text';
            currentKcalText.style.webkitTextFillColor = 'transparent';
        } else {
            kcalProgressRing.style.stroke = 'var(--accent-color)';
            currentKcalText.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
            currentKcalText.style.webkitBackgroundClip = 'text';
            currentKcalText.style.backgroundClip = 'text';
            currentKcalText.style.webkitTextFillColor = 'transparent';
        }
    }

    if (foodForm) {
        // Setup initial stroke options
        kcalProgressRing.style.strokeDasharray = CIRCLE_CIRCUMFERENCE;
        updateProgress();

        foodForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = foodNameInput.value.trim();
            const kcal = parseInt(foodKcalInput.value);

            if (name && kcal > 0) {
                totalKcal += kcal;
                
                const li = document.createElement('li');
                li.className = 'food-item';
                li.innerHTML = `
                    <span class="food-item-name">${name}</span>
                    <div class="food-item-kcal">
                        <span>${kcal} kcal</span>
                        <button type="button" class="delete-btn" aria-label="Delete"><i class="fa-solid fa-trash"></i></button>
                    </div>
                `;

                li.querySelector('.delete-btn').addEventListener('click', () => {
                    totalKcal -= kcal;
                    if(totalKcal < 0) totalKcal = 0;
                    li.remove();
                    updateProgress();
                });

                foodList.prepend(li);
                updateProgress();
                foodForm.reset();
            }
        });
    }

    // Hydration Logic
    const waterLevelUI = document.getElementById('water-level');
    const currentWaterText = document.getElementById('current-water');
    const waterButtons = document.querySelectorAll('.water-btn[data-amount]');
    const waterResetBtn = document.getElementById('water-reset');

    let totalWater = 0;
    const GOAL_WATER = 2500;

    function updateWaterProgress() {
        if (!waterLevelUI || !currentWaterText) return;
        const percentage = Math.min((totalWater / GOAL_WATER) * 100, 100);
        waterLevelUI.style.height = `${percentage}%`;
        currentWaterText.textContent = totalWater;

        if (totalWater >= GOAL_WATER) {
            waterLevelUI.classList.add('goal-reached');
            currentWaterText.style.background = 'linear-gradient(135deg, #10b981 0%, #34d399 100%)';
            currentWaterText.style.webkitTextFillColor = 'transparent';
        } else {
            waterLevelUI.classList.remove('goal-reached');
            currentWaterText.style.background = 'linear-gradient(135deg, #0ea5e9 0%, #7dd3fc 100%)';
            currentWaterText.style.webkitTextFillColor = 'transparent';
        }
    }

    if (waterButtons.length > 0) {
        waterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const amount = parseInt(btn.getAttribute('data-amount'));
                if (!isNaN(amount)) {
                    totalWater += amount;
                    updateWaterProgress();
                }
            });
        });

        if (waterResetBtn) {
            waterResetBtn.addEventListener('click', () => {
                totalWater = 0;
                updateWaterProgress();
            });
        }
        
        updateWaterProgress();
    }

    // Meal Plan Calendar Logic
    const calendarGrid = document.getElementById('meal-calendar');
    if (calendarGrid) {
        const TOTAL_DAYS = 30;
        
        // Load saved state
        const savedData = JSON.parse(localStorage.getItem('nutritionCalendar')) || {};

        for (let i = 1; i <= TOTAL_DAYS; i++) {
            const dayBox = document.createElement('div');
            dayBox.className = 'day-box';
            
            if (savedData[i] === 'completed') dayBox.classList.add('completed');
            if (savedData[i] === 'missed') dayBox.classList.add('missed');

            const dayNum = document.createElement('div');
            dayNum.className = 'day-number';
            dayNum.textContent = i;

            const statusOrb = document.createElement('div');
            statusOrb.className = 'day-status';

            dayBox.appendChild(dayNum);
            dayBox.appendChild(statusOrb);

            dayBox.addEventListener('click', () => {
                if (dayBox.classList.contains('completed')) {
                    dayBox.classList.remove('completed');
                    dayBox.classList.add('missed');
                    savedData[i] = 'missed';
                } else if (dayBox.classList.contains('missed')) {
                    dayBox.classList.remove('missed');
                    savedData[i] = 'none';
                } else {
                    dayBox.classList.add('completed');
                    savedData[i] = 'completed';
                }
                
                localStorage.setItem('nutritionCalendar', JSON.stringify(savedData));
            });

            calendarGrid.appendChild(dayBox);
        }
    }
});
