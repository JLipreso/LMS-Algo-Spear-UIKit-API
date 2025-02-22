export function calculateQuizResult(score: number, totalQuestions: number, passingPercentage: number = 75) {

    const percentage    = (score / totalQuestions) * 100;
    const status        = percentage >= passingPercentage ? "Pass" : "Fail";

    return {
        percentage: percentage.toFixed(2) + '%',
        status: status
    };
}