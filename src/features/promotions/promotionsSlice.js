import { PROMOTIONS } from '../../app/shared/PROMOTIONS';

export const SelectFeaturedPromotion = () => {
    return PROMOTIONS.find((promotion) => promotion.featured);
};