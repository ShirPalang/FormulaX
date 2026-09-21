export type CalculatorProps = {
  onEqual?: (result: string, operation: string) => void
  type?: 'post' | 'story' | 'comment'
  onClose?: ()=> void
}