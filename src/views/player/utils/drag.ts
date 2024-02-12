export function dragStart(event: any) {
  // 设置拖拽的数据
  event.dataTransfer.setData('text/plain', event.target.id)
}

export function handleDragEnd(event: any) {
  // 拖拽结束时的清理操作
  event.target.style.opacity = '1'
}

export function handleDragOver(event: any) {
  // 阻止默认的拖拽行为
  event.preventDefault()
}
export function handleDrop(event: any, draggedElement: HTMLElement) {
  // 阻止默认的拖拽行为
  event.preventDefault()

  // 获取拖拽的数据
  const data = event.dataTransfer.getData('text/plain')

  // 获取鼠标释放位置的坐标
  const mouseX = event.clientX
  const mouseY = event.clientY

  // 设置拖拽元素的位置
  draggedElement.style.left = mouseX - draggedElement.offsetWidth / 2 + 'px'
  draggedElement.style.top = mouseY - draggedElement.offsetHeight / 2 + 'px'

  // 将拖拽的元素追加到 body
  document.body.appendChild(draggedElement)
}
