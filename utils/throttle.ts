function throttle<T extends unknown[]>(callback: (...args: T) => void, delay: number = 100) {
  let isWaiting = false

  return (...args: T) => {
    if (isWaiting) {
      return
    }

    callback(...args)
    isWaiting = true

    setTimeout(() => {
      isWaiting = false
    }, delay)
  }
}

export {
  throttle,
}
