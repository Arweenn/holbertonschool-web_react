export interface MajorCredits {
	_majorCreditBrand: void;
	credits: number;
}

export interface MinorCredits {
	_minorCreditBrand: void;
	credits: number;
}


// Return Total Major credits and the sum
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// Return Total Minor credits and the sum
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return { credits: subject1.credits + subject2.credits } as MinorCredits;
}