let boardArray = [
	[24, 22, 23, 25, 26, 23, 22, 24],
	[21, 21, 21, 21, 21, 21, 21, 21],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[11, 11, 11, 11, 11, 11, 11, 11],
	[14, 12, 13, 15, 16, 13, 12, 14]
]

let whiteTurn = true

let target = null

let whiteCastling = {
	left: true,
	right: true,
	king: true
}

let blackCastling = {
	left: true,
	right: true,
	king: true
}

let board = document.querySelector('.board')
let modalBlock = document.querySelector('.modal')

let printBoard = () => {
	let cells = ''
	let c = 0
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (c % 2 == 0) {
				cells += '<div class="cell white"></div>'
			} else {
				cells += '<div class="cell black"></div>'
			}
			c++
		}
		c++
	}
	board.innerHTML = cells
}

printBoard()

let isNumberInArray = (i, j) => {
	if (i >= 0 && i <= 7 && j >= 0 && j <= 7) {
		return true
	} else {
		return false
	}
}

let cells = document.getElementsByClassName('cell')

// Логика фируг:

for (let i = 0; i < cells.length; i++) {
	cells[i].addEventListener('click', () => {

		let di = Math.floor(i / 8)
		let dj = i % 8

		if (target == null) {

			// Белые фигуры:

			if (whiteTurn) {
				for (let i = 0; i < cells.length; i++) {
					cells[i].classList.remove('blueCell')
					cells[i].classList.remove('redCell')
					cells[i].classList.remove('castlingCell')
				}
				if (boardArray[di][dj] > 10 && boardArray[di][dj] < 20) {
					target = [di, dj]
					cells[i].classList.add('blueCell')

					// Белые пешки:

					if (boardArray[di][dj] == 11) {
						if (boardArray[di - 1][dj] == 0) {
							cells[i-8].classList.add('blueCell')
							if (isNumberInArray(di - 2, dj)) {
								if (boardArray[di - 2][dj] == 0 && di == 6) {
									cells[i-16].classList.add('blueCell')
								}
							}	
						}
						if (isNumberInArray(di - 1, dj - 1)) {
							if (boardArray[di - 1][dj - 1] > 20) {
								cells[i-9].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj + 1)) {
							if (boardArray[di - 1][dj + 1] > 20) {
								cells[i-7].classList.add('redCell')
							}
						}
					}

					// Белые кони:

					if (boardArray[di][dj] == 12) {
						if (isNumberInArray(di + 2, dj - 1)) {
							if (boardArray[di + 2][dj - 1] == 0) {
								cells[i+15].classList.add('blueCell')
							}
							if (boardArray[di + 2][dj - 1] > 20) {
								cells[i+15].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 2, dj + 1)) {
							if (boardArray[di + 2][dj + 1] == 0) {
								cells[i+17].classList.add('blueCell')
							}
							if (boardArray[di + 2][dj + 1] > 20) {
								cells[i+17].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 2, dj - 1)) {
							if (boardArray[di - 2][dj - 1] == 0) {
								cells[i-17].classList.add('blueCell')
							}
							if (boardArray[di - 2][dj - 1] > 20) {
								cells[i-17].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 2, dj - 1)) {
							if (boardArray[di - 2][dj + 1] == 0) {
								cells[i-15].classList.add('blueCell')
							}
							if (boardArray[di - 2][dj + 1] > 20) {
								cells[i-15].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj + 2)) {
							if (boardArray[di + 1][dj + 2] == 0) {
								cells[i+10].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj + 2] > 20) {
								cells[i+10].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj + 2)) {
							if (boardArray[di - 1][dj + 2] == 0) {
								cells[i-6].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj + 2] > 20) {
								cells[i-6].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj - 2)) {
							if (boardArray[di + 1][dj - 2] == 0) {
								cells[i+6].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj - 2] > 20) {
								cells[i+6].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj - 2)) {
							if (boardArray[di - 1][dj - 2] == 0) {
								cells[i-10].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj - 2] > 20) {
								cells[i-10].classList.add('redCell')
							}
						}
					}

					// Белый король:

					if (boardArray[di][dj] == 16) {
						if (isNumberInArray(di + 1, dj)) {
							if (boardArray[di + 1][dj] == 0) {
								cells[i+8].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj] > 20) {
								cells[i+8].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj)) {
							if (boardArray[di - 1][dj] == 0) {
								cells[i-8].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj] > 20) {
								cells[i-8].classList.add('redCell')
							}
						}
						if (isNumberInArray(di, dj + 1)) {
							if (boardArray[di][dj + 1] == 0) {
								cells[i+1].classList.add('blueCell')
							}
							if (boardArray[di][dj + 1] > 20) {
								cells[i+1].classList.add('redCell')
							}
						}
						if (isNumberInArray(di, dj - 1)) {
							if (boardArray[di][dj - 1] == 0) {
								cells[i-1].classList.add('blueCell')
							}
							if (boardArray[di][dj - 1] > 20) {
								cells[i-1].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj + 1)) {
							if (boardArray[di + 1][dj + 1] == 0) {
								cells[i+9].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj + 1] > 20) {
								cells[i+9].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj - 1)) {
							if (boardArray[di + 1][dj - 1] == 0) {
								cells[i+7].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj - 1] > 20) {
								cells[i+7].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj + 1)) {
							if (boardArray[di - 1][dj + 1] == 0) {
								cells[i-7].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj + 1] > 20) {
								cells[i-7].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj - 1)) {
							if (boardArray[di - 1][dj - 1] == 0) {
								cells[i-9].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj - 1] > 20) {
								cells[i-9].classList.add('redCell')
							}
						}
						if (whiteCastling.king) {
							if (whiteCastling.left) {
								if (boardArray[7][1] == 0 && boardArray[7][2] == 0 && boardArray[7][3] == 0) {
									cells[58].classList.add('castlingCell')
								}
							}
							if (whiteCastling.right) {
								if (boardArray[7][5] == 0 && boardArray[7][6] == 0) {
									cells[62].classList.add('castlingCell')
								}
							}
						}
					}

					// Белые ладьи:

					if (boardArray[di][dj] == 14) {
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj)) {
								if (boardArray[di + j][dj] == 0) {
									cells[i + j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj] > 20) {
										cells[i + j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj)) {
								if (boardArray[di - j][dj] == 0) {
									cells[i - j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj] > 20) {
										cells[i - j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj + j)) {
								if (boardArray[di][dj + j] == 0) {
									cells[i + j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj + j] > 20) {
										cells[i + j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj - j)) {
								if (boardArray[di][dj - j] == 0) {
									cells[i - j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj - j] > 20) {
										cells[i - j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
					}

					// Белые слоны:
					
					if (boardArray[di][dj] == 13) {
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj + j)) {
								if (boardArray[di - j][dj + j] == 0) {
									cells[i - j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj + j] > 20) {
										cells[i - j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj - j)) {
								if (boardArray[di - j][dj - j] == 0) {
									cells[i - j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj - j] > 20) {
										cells[i - j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj - j)) {
								if (boardArray[di + j][dj - j] == 0) {
									cells[i + j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj - j] > 20) {
										cells[i + j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj + j)) {
								if (boardArray[di + j][dj + j] == 0) {
									cells[i + j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj + j] > 20) {
										cells[i + j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
					}

					// Белые ферзи:

					if (boardArray[di][dj] == 15) {
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj)) {
								if (boardArray[di + j][dj] == 0) {
									cells[i + j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj] > 20) {
										cells[i + j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj)) {
								if (boardArray[di - j][dj] == 0) {
									cells[i - j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj] > 20) {
										cells[i - j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj + j)) {
								if (boardArray[di][dj + j] == 0) {
									cells[i + j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj + j] > 20) {
										cells[i + j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj - j)) {
								if (boardArray[di][dj - j] == 0) {
									cells[i - j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj - j] > 20) {
										cells[i - j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj + j)) {
								if (boardArray[di - j][dj + j] == 0) {
									cells[i - j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj + j] > 20) {
										cells[i - j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj - j)) {
								if (boardArray[di - j][dj - j] == 0) {
									cells[i - j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj - j] > 20) {
										cells[i - j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj - j)) {
								if (boardArray[di + j][dj - j] == 0) {
									cells[i + j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj - j] > 20) {
										cells[i + j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj + j)) {
								if (boardArray[di + j][dj + j] == 0) {
									cells[i + j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj + j] > 20) {
										cells[i + j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
					}

				}
			} else {
				if (boardArray[di][dj] > 20) {
					target = [di, dj]
					cells[i].classList.add('blueCell')

					// Черные пешки:

					if (boardArray[di][dj] == 21) {
						if (boardArray[di + 1][dj] == 0) {
							cells[i+8].classList.add('blueCell')
							if (isNumberInArray(di + 2, dj)) {
								if (boardArray[di + 2][dj] == 0 && di == 1) {
									cells[i+16].classList.add('blueCell')
								}
							}
						}
						if (isNumberInArray(di + 1, dj - 1)) {
							if (boardArray[di + 1][dj - 1] > 10 && boardArray[di + 1][dj - 1] < 20) {
								cells[i+7].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj + 1)) {
							if (boardArray[di + 1][dj + 1] > 10 && boardArray[di + 1][dj + 1] < 20) {
								cells[i+9].classList.add('redCell')
							}
						}
					}

					// Черные кони:

					if (boardArray[di][dj] == 22) {
						if (isNumberInArray(di + 2, dj - 1)) {
							if (boardArray[di + 2][dj - 1] == 0) {
								cells[i+15].classList.add('blueCell')
							}
							if (boardArray[di + 2][dj - 1] > 10 && boardArray[di + 2][dj - 1] < 20) {
								cells[i+15].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 2, dj + 1)) {
							if (boardArray[di + 2][dj + 1] == 0) {
								cells[i+17].classList.add('blueCell')
							}
							if (boardArray[di + 2][dj + 1] > 10 && boardArray[di + 2][dj + 1] < 20) {
								cells[i+17].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 2, dj - 1)) {
							if (boardArray[di - 2][dj - 1] == 0) {
								cells[i-17].classList.add('blueCell')
							}
							if (boardArray[di - 2][dj - 1] > 10 && boardArray[di - 2][dj - 1] < 20) {
								cells[i-17].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 2, dj - 1)) {
							if (boardArray[di - 2][dj + 1] == 0) {
								cells[i-15].classList.add('blueCell')
							}
							if (boardArray[di - 2][dj + 1] > 10 && boardArray[di - 2][dj + 1] < 20) {
								cells[i-15].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj + 2)) {
							if (boardArray[di + 1][dj + 2] == 0) {
								cells[i+10].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj + 2] > 10 && boardArray[di + 1][dj + 2] < 20) {
								cells[i+10].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj + 2)) {
							if (boardArray[di - 1][dj + 2] == 0) {
								cells[i-6].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj + 2] > 10 && boardArray[di - 1][dj + 2] < 20) {
								cells[i-6].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj - 2)) {
							if (boardArray[di + 1][dj - 2] == 0) {
								cells[i+6].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj - 2] > 10 && boardArray[di + 1][dj - 2] < 20) {
								cells[i+6].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj - 2)) {
							if (boardArray[di - 1][dj - 2] == 0) {
								cells[i-10].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj - 2] > 10 && boardArray[di - 1][dj - 2] < 20) {
								cells[i-10].classList.add('redCell')
							}
						}
					}


					// Черный король:

					if (boardArray[di][dj] == 26) {
						if (isNumberInArray(di + 1, dj)) {
							if (boardArray[di + 1][dj] == 0) {
								cells[i+8].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj] > 10 && boardArray[di + 1][dj] < 20) {
								cells[i+8].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj)) {
							if (boardArray[di - 1][dj] == 0) {
								cells[i-8].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj] > 10 && boardArray[di - 1][dj] < 20) {
								cells[i-8].classList.add('redCell')
							}
						}
						if (isNumberInArray(di, dj + 1)) {
							if (boardArray[di][dj + 1] == 0) {
								cells[i+1].classList.add('blueCell')
							}
							if (boardArray[di][dj + 1] > 10 && boardArray[di][dj + 1] < 20) {
								cells[i+1].classList.add('redCell')
							}
						}
						if (isNumberInArray(di, dj - 1)) {
							if (boardArray[di][dj - 1] == 0) {
								cells[i-1].classList.add('blueCell')
							}
							if (boardArray[di][dj - 1] > 10 && boardArray[di][dj - 1] < 20) {
								cells[i-1].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj + 1)) {
							if (boardArray[di + 1][dj + 1] == 0) {
								cells[i+9].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj + 1] > 10 && boardArray[di + 1][dj + 1] < 20) {
								cells[i+9].classList.add('redCell')
							}
						}
						if (isNumberInArray(di + 1, dj - 1)) {
							if (boardArray[di + 1][dj - 1] == 0) {
								cells[i+7].classList.add('blueCell')
							}
							if (boardArray[di + 1][dj - 1] > 10 && boardArray[di + 1][dj - 1] < 20) {
								cells[i+7].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj + 1)) {
							if (boardArray[di - 1][dj + 1] == 0) {
								cells[i-7].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj + 1] > 10 && boardArray[di - 1][dj + 1] < 20) {
								cells[i-7].classList.add('redCell')
							}
						}
						if (isNumberInArray(di - 1, dj - 1)) {
							if (boardArray[di - 1][dj - 1] == 0) {
								cells[i-9].classList.add('blueCell')
							}
							if (boardArray[di - 1][dj - 1] > 10 && boardArray[di - 1][dj - 1] < 20) {
								cells[i-9].classList.add('redCell')
							}
						}
						if (blackCastling.king) {
							if (blackCastling.left) {
								if (boardArray[0][1] == 0 && boardArray[0][2] == 0 && boardArray[0][3] == 0) {
									cells[2].classList.add('castlingCell')
								}
							}
							if (blackCastling.right) {
								if (boardArray[0][5] == 0 && boardArray[0][6] == 0) {
									cells[6].classList.add('castlingCell')
								}
							}
						}
					}

					// Черные ладьи:

					if (boardArray[di][dj] == 24) {
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj)) {
								if (boardArray[di + j][dj] == 0) {
									cells[i + j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj] > 10 && boardArray[di + j][dj] < 20) {
										cells[i + j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj)) {
								if (boardArray[di - j][dj] == 0) {
									cells[i - j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj] > 10 && boardArray[di - j][dj] < 20) {
										cells[i - j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj + j)) {
								if (boardArray[di][dj + j] == 0) {
									cells[i + j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj + j] > 10 && boardArray[di][dj + j] < 20) {
										cells[i + j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj - j)) {
								if (boardArray[di][dj - j] == 0) {
									cells[i - j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj - j] > 10 && boardArray[di][dj - j] < 20) {
										cells[i - j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
					}

					// Черные слоны:

					if (boardArray[di][dj] == 23) {
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj + j)) {
								if (boardArray[di - j][dj + j] == 0) {
									cells[i - j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj + j] > 10 && boardArray[di - j][dj + j] < 20) {
										cells[i - j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj - j)) {
								if (boardArray[di - j][dj - j] == 0) {
									cells[i - j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj - j] > 10 && boardArray[di - j][dj - j] < 20) {
										cells[i - j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj - j)) {
								if (boardArray[di + j][dj - j] == 0) {
									cells[i + j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj - j] > 10 && boardArray[di + j][dj - j] < 20) {
										cells[i + j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj + j)) {
								if (boardArray[di + j][dj + j] == 0) {
									cells[i + j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj + j] > 10 && boardArray[di + j][dj + j] < 20) {
										cells[i + j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
					}

					// Черные ферзи:

					if (boardArray[di][dj] == 25) {
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj)) {
								if (boardArray[di + j][dj] == 0) {
									cells[i + j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj] > 10 && boardArray[di + j][dj] < 20) {
										cells[i + j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj)) {
								if (boardArray[di - j][dj] == 0) {
									cells[i - j * 8].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj] > 10 && boardArray[di - j][dj] < 20) {
										cells[i - j * 8].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj + j)) {
								if (boardArray[di][dj + j] == 0) {
									cells[i + j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj + j] > 10 && boardArray[di][dj + j] < 20) {
										cells[i + j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di, dj - j)) {
								if (boardArray[di][dj - j] == 0) {
									cells[i - j].classList.add('blueCell')
								} else {
									if (boardArray[di][dj - j] > 10 && boardArray[di][dj - j] < 20) {
										cells[i - j].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj + j)) {
								if (boardArray[di - j][dj + j] == 0) {
									cells[i - j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj + j] > 10 && boardArray[di - j][dj + j] < 20) {
										cells[i - j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di - j, dj - j)) {
								if (boardArray[di - j][dj - j] == 0) {
									cells[i - j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di - j][dj - j] > 10 && boardArray[di - j][dj - j] < 20) {
										cells[i - j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj - j)) {
								if (boardArray[di + j][dj - j] == 0) {
									cells[i + j * 7].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj - j] > 10 && boardArray[di + j][dj - j] < 20) {
										cells[i + j * 7].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
						for (let j = 1; j < 8; j++) {
							if (isNumberInArray(di + j, dj + j)) {
								if (boardArray[di + j][dj + j] == 0) {
									cells[i + j * 9].classList.add('blueCell')
								} else {
									if (boardArray[di + j][dj + j] > 10 && boardArray[di + j][dj + j] < 20) {
										cells[i + j * 9].classList.add('redCell')
									}
									break
								}
							} else {break}
						}
					}
				}
			}
		} else {
			if (cells[i].classList.contains('blueCell') || cells[i].classList.contains('redCell')) {
				if (target[0] != di || target[1] != dj) {
					if (boardArray[di][dj] == 16) {
						modal('Черные победили!')
						startGame()
					} else if (boardArray[di][dj] == 26) {
						modal('Белые победили!')
						startGame()
					} else {
						boardArray[di][dj] = boardArray[target[0]][target[1]]
						boardArray[target[0]][target[1]] = 0
					}

					// Превращение пешек в ферзей

					if (boardArray[di][dj] == 11 && di == 0) {
						boardArray[di][dj] = 15
					}
					if (boardArray[di][dj] == 21 && di == 7) {
						boardArray[di][dj] = 25
					}

					// Рокировка:

					if (target[0] == 7 && target[1] == 0 && boardArray[di][dj] == 14) {
						whiteCastling.left = false
					}
					if (target[0] == 7 && target[1] == 7 && boardArray[di][dj] == 14) {
						whiteCastling.right = false
					}
					if (boardArray[di][dj] == 16) {
						whiteCastling.king = false
					}
					if (target[0] == 0 && target[1] == 0 && boardArray[di][dj] == 24) {
						blackCastling.left = false
					}
					if (target[0] == 0 && target[1] == 7 && boardArray[di][dj] == 24) {
						blackCastling.right = false
					}
					if (boardArray[di][dj] == 26) {
						blackCastling.king = false
					}

					render()
					whiteTurn = !whiteTurn
				}
			}

			if (cells[i].classList.contains('castlingCell')) {
				if (i == 2) {
					boardArray[0][0] = 0
					boardArray[0][2] = 26
					boardArray[0][3] = 24
					boardArray[0][4] = 0
					blackCastling.king = false
				}
				if (i == 6) {
					boardArray[0][4] = 0
					boardArray[0][5] = 24
					boardArray[0][6] = 26
					boardArray[0][7] = 0
					blackCastling.king = false
				}
				if (i == 58) {
					boardArray[7][0] = 0
					boardArray[7][2] = 16
					boardArray[7][3] = 14
					boardArray[7][4] = 0
					whiteCastling.king = false
				}
				if (i == 62) {
					boardArray[7][4] = 0
					boardArray[7][5] = 14
					boardArray[7][6] = 16
					boardArray[7][7] = 0
					whiteCastling.king = false
				}

				render()
				whiteTurn = !whiteTurn
			}

			target = null
			for (let i = 0; i < cells.length; i++) {
				cells[i].classList.remove('blueCell')
				cells[i].classList.remove('redCell')
				cells[i].classList.remove('castlingCell')
			}
		}
	})
}

let render = () => {
	let c = 0
	for (let i = 0; i < 8; i++) {
		for (let j = 0; j < 8; j++) {
			if (boardArray[i][j] != 0) {
				cells[c].innerHTML = '<img src="img/' + boardArray[i][j] + '.png" alt="">'
			} else {
				cells[c].innerHTML = ''
			}
			c++
		}
	}
}

let modal = (text) => {
	modalBlock.style.display = 'flex'
	modalBlock.innerHTML = text
	setTimeout(() => {
		modalBlock.style.display = 'none'
	}, 700)
}

let startGame = () => {

	boardArray = [
		[24, 22, 23, 25, 26, 23, 22, 24],
		[21, 21, 21, 21, 21, 21, 21, 21],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 0],
		[11, 11, 11, 11, 11, 11, 11, 11],
		[14, 12, 13, 15, 16, 13, 12, 14]
	]

	whiteTurn = true

	target = null

	whiteCastling = {
		left: true,
		right: true,
		king: true
	}

	blackCastling = {
		left: true,
		right: true,
		king: true
	}

	render()

	for (let i = 0; i < cells.length; i++) {
		cells[i].classList.remove('blueCell')
		cells[i].classList.remove('redCell')
		cells[i].classList.remove('castlingCell')
	}
}

startGame()