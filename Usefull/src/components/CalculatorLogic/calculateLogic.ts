import { Alert } from 'react-native';
export const rows = [
        ['<', 'AC', '%', '/'],
        ['7', '8', '9', 'x'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['+/-', '0', ',', '='],
    ];
 export   const operators = ['/', 'x', '+', '=', '-'];
 export   const specialButtonsOthers = ['<', 'AC', '%'];


export function calculate(a: number, b: number, operator: string | null): number {
        switch (operator) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case 'x':
                return a * b;
            case '/':
                if (b === 0) {
                    Alert.alert('Error', 'Cannot divide by zero');
                    return 0;
                }
                return a / b;
            default:
                return b;
        }
    }