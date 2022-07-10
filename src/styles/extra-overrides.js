// @scripts
import extraColors from './extra-colors';

export default ({
    overrides: {
        MuiButton: {
            root: {
                '&:hover': {
                    backgroundColor: 'none'
                }
            }
        },
        MuiTooltip: {
            tooltip: {
                backgroundColor: extraColors.background.tooltipInfo,
                height: 22
            }
        }
    }
});
