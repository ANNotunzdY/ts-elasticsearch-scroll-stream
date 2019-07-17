import { Client, SearchParams, NameList } from 'elasticsearch';
import { Readable, ReadableOptions } from 'readable-stream';

declare class ElasticsearchScrollStream extends Readable {
    constructor(client: Client, query_opts: SearchParams, optional_fields: NameList, stream_opts: ReadableOptions);
}
