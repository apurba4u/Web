let currentTab = 'all'
const tabActive = ['bg-[#1d3557]', 'border-[#1d3557]', 'text-white']

const allContainer = document.querySelector("#all-container")
const interviewContainer = document.querySelector("#interview-container")
const rejectContainer = document.querySelector("#reject-container")

const tabInactive = ['bg-transparent', 'text-slate-700', 'border-state-200', 'text-black']
function switchTab(tab) {
  // kun button e click korle ki oibo
  const tabs = ['all', 'interview', 'rejected']
  for (const t of tabs) {
    const tabName = document.querySelector(`#tab-${t}`)
    if (t === tab) {
      tabName.classList.remove(...tabInactive)
      tabName.classList.add(...tabActive)
    } else {
      tabName.classList.remove(...tabActive)
      tabName.classList.add(...tabInactive)
    }
  }

  // je button e click korbe sudhu matro seguloi dekhabe
  const pages = [allContainer, interviewContainer, rejectContainer]

  for (const i of pages) {
    i.classList.add('hidden')
  }

  if (tab === 'all') {
    allContainer.classList.remove('hidden')
  } else if (tab === 'interview') {
    interviewContainer.classList.remove('hidden')
  } else {
    rejectContainer.classList.remove('hidden')
  }
}
// stat update
const totalStat = document.querySelector('#stat-total')
const interviewStat = document.querySelector('#stat-interview')
const rejectStat = document.querySelector('#stat-reject')

totalStat.textContent = allContainer.children.length

switchTab(currentTab)

// event delegation
document.querySelector('#jobs-container').addEventListener('click', (elem) => {
  const clickedElement = elem.target
  const card = clickedElement.closest(".card")
  const parent = card.parentNode
  const status = card.querySelector('.status')
  console.log(card);

  if(clickedElement.classList.contains('interview')) {
    status.textContent = 'Interviewed'
    interviewContainer.appendChild(card)
    updateStat()
    // console.log('interview clicked');
  }
  if(clickedElement.classList.contains('rejected')) {
    status.textContent = 'Rejected'
    rejectContainer.appendChild(card)
    updateStat()
    // console.log('rejected clicked');
  }
  if(clickedElement.classList.contains('delete')) {
    // console.log('delete clicked');
    parent.removeChild(card)
    updateStat()
  }
})

// stat update
function updateStat() {
  totalStat.textContent = allContainer.children.length
  interviewStat.textContent = interviewContainer.children.length
  rejectStat.textContent = rejectContainer.children.length
}
updateStat()