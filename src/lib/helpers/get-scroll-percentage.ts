const getScrollPercentage = () => {
  const scrolled = document.documentElement.scrollTop
  const scrollable =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight
  const percentage = (scrolled / scrollable) * 100
  const roundedPercentage = Math.floor(percentage)
  return roundedPercentage
}

export { getScrollPercentage }
