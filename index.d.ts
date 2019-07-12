import { Client, SearchParams, NameList } from 'elasticsearch';
import { Readable, ReadableOptions } from 'readable-stream';

declare function ElasticsearchScrollStream(client: Client, query_opts: SearchParams, optional_fields: NameList, stream_opts: ReadableOptions): LibElasticsearchScrollStream;
declare class LibElasticsearchScrollStream　extends Readable {
}
