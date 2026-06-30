import { css } from '@pionjs/pion'

export const styles = css` <style>
	:host {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 100%;
		overflow: hidden;
	}

	:host([data-direction='vertical']) {
		flex-direction: column;
	}

	::slotted(*) {
		flex: 1 1 0;
		min-width: 0;
		min-height: 0;
		overflow: auto;
	}

	:host([data-direction='vertical']) ::slotted(*) {
		min-width: auto;
	}
</style>`