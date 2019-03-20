@extends('_layouts.documentation')

{{-- No content --}}

@push('scripts')
<script type="text/javascript">
    $.when($.ready).then(function() {
        document.addEventListener('DOMContentLoaded', function() {
            const urlParams = new URLSearchParams(window.location.search);
            const query = urlParams.get('q');
            
            const docsearchAutocomplete = search.autocomplete; // The underlying autocomplete.js instance
            const autocomplete = docsearchAutocomplete.autocomplete; 

            autocomplete.setVal(query);
            autocomplete.open();
        });
    }());
</script>
@endpush
