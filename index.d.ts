import * as elasticsearch from 'elasticsearch';
import * as readableStream from 'readable-stream';

declare class ElasticsearchScrollStream extends readableStream.Readable {
    constructor(client: elasticsearch.Client, query_opts: elasticsearch.SearchParams, optional_fields: elasticsearch.NameList, stream_opts: readableStream.ReadableOptions);
}
