function isPrime(num: number): boolean {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
}

function calculatePrimes(arg?: unknown): number {
  const primes: number[] = []
  for (let i = 2; i < 10000000; i++) {
    if (isPrime(i)) {
      primes.push(i)
    }
  }
  return primes[primes.length - 1];
}

function Child({
  count = 1,
  obj,
}: {
  count?: number
  obj: Record<string, string>
}) {
  'use memo'
  console.log('rendered Child')

  const prime = calculatePrimes(obj)

  return (
    <p>
      count is {count}
      <br />
      biggest prime is {prime}
    </p>
  )
}

export default Child
