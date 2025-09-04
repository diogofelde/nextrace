class StreamWrapper:
    def __init__(self, stream, converter):
        self.stream = stream
        self.converter = converter

__all__ = ['StreamWrapper']