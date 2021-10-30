import { environment } from '../../environments/environment';

export const Server = {
    endpoint : environment.APP_ENDPOINT,
    project: environment.APP_PROJECT,

    productsColID:environment.APP_DOC_PROD_COLID,
    categoryColID:environment.APP_DOC_CAT_COLID,
    listColID:environment.APP_DOC_LIST_COLID,
    listProductColID:environment.APP_DOC_LIPR_COLID,
    projColID:environment.APP_PROJ_COLLECTION_ID,

    /* collectionID : environment.APP_COLLECTION_ID */
}