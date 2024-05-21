document.addEventListener('DOMContentLoaded', () => {
    const selectPlanButtons = document.querySelectorAll('.select-plan');
    const selectedPlanDetails = document.getElementById('selected-plan-details');
    const currentPlan = selectedPlanDetails.querySelector('.current-plan');
    const currentPrice = selectedPlanDetails.querySelector('.current-price');

    selectPlanButtons.forEach(button => {
        button.addEventListener('click', () => {
            const plan = button.parentElement;
            const planName = plan.querySelector('h2').textContent;
            const planPrice = plan.querySelector('.price').textContent;

            currentPlan.textContent = planName;
            currentPrice.textContent = planPrice;
        });
    });
});
